package com.app.aftas.services.Impl;

import com.app.aftas.exceptions.ResourceNotFoundException;
import com.app.aftas.dtos.responseDto.SingleHuntDto;
import com.app.aftas.dtos.Dto.HuntingDto;
import com.app.aftas.models.Hunting;
import com.app.aftas.repositories.CompetitionRepository;
import com.app.aftas.repositories.FishRepository;
import com.app.aftas.repositories.HuntingRepository;
import com.app.aftas.repositories.MemberRepository;
import com.app.aftas.services.HuntingService;

import lombok.AllArgsConstructor;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@AllArgsConstructor

@Service
public class HuntingServiceImpl implements HuntingService {

    private HuntingRepository huntingRepository;
    private FishRepository fishRepository;
    private CompetitionRepository competitionRepository;
    private MemberRepository memberRepository;
    private ModelMapper modelMapper;

    @Override
    public SingleHuntDto createHunt(HuntingDto hunting){
        Hunting huntingInstance;
        if(!huntingRepository.existsHuntingByFishNameAndMemberNumAndCompetitionCode(
                hunting.getFish_name(),
                hunting.getMember_num(),
                hunting.getCompetition_code()
        )){
            huntingInstance = Hunting.builder().numberOfFish(hunting.getNumberOfFish())
                                               .fish(fishRepository.findById(hunting.getFish_name()).get())
                                                       .competition(competitionRepository.findById(hunting.getCompetition_code()).get())
                                                               .member(memberRepository.findById(hunting.getMember_num()).get()).build();
            System.out.println(huntingInstance.toString());
        }else{
            huntingInstance = huntingRepository.findHuntingByFishNameAndMemberNumAndCompetitionCode(
                    hunting.getFish_name(),
                    hunting.getMember_num(),
                    hunting.getCompetition_code()
            );
            huntingInstance.setNumberOfFish(
                    hunting.getNumberOfFish() + huntingInstance.getNumberOfFish()
            );
            System.out.println(huntingInstance.toString());
        }
        return modelMapper.map(huntingRepository.save(huntingInstance), SingleHuntDto.class);
    }


    @Override
    public List<SingleHuntDto> getHunts(){
        return Arrays.asList(modelMapper.map(huntingRepository.findAll(), SingleHuntDto[].class));
    }

    @Override
    public void deleteById(int id){
        if (!huntingRepository.existsById(id))
            throw new ResourceNotFoundException("invalid hunt id");
        huntingRepository.deleteById(id);
    }

    @Override
    public SingleHuntDto updateNumberOfFish(int id, int valueToAdd){
        if(!huntingRepository.existsById(id) || valueToAdd < 1)
            throw new ResourceNotFoundException("invalid hunt id or fish number is less than 1");
        Hunting huntingInstance = huntingRepository.findById(id).get();
        huntingInstance.setNumberOfFish(valueToAdd);
        return modelMapper.map(huntingRepository.save(huntingInstance), SingleHuntDto.class);
    }

    @Override
    public List<SingleHuntDto> findHuntByCompetitionAndMember(String code, int num){
        return Arrays.asList(modelMapper.map(huntingRepository.findHuntingByCompetitionCodeAndMemberNum(code, num), SingleHuntDto[].class));
    }
}
