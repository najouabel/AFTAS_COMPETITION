package com.app.aftas.services;

import com.app.aftas.dtos.responseDto.SingleHuntDto;
import com.app.aftas.dtos.Dto.HuntingDto;

import java.util.List;

public interface HuntingService {
    SingleHuntDto createHunt(HuntingDto hunting);

    List<SingleHuntDto> getHunts();

    void deleteById(int id);

    SingleHuntDto updateNumberOfFish(int id, int valueToAdd);

    List<SingleHuntDto> findHuntByCompetitionAndMember(String code, int num);
}
