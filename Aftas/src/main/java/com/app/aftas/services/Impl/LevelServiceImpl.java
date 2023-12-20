package com.app.aftas.services.Impl;

import com.app.aftas.exceptions.PointsValidationException;
import com.app.aftas.exceptions.ResourceNotFoundException;
import com.app.aftas.dtos.Dto.LevelDto;
import com.app.aftas.models.Level;
import com.app.aftas.repositories.LevelRepository;
import com.app.aftas.services.LevelService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LevelServiceImpl implements LevelService {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private LevelRepository levelRepository;

    @Override
    public LevelDto save(LevelDto levelDto) {
        Optional<Level> maxCodeLevelOpt = levelRepository.findFirstByOrderByCodeDesc();
        if (maxCodeLevelOpt.isPresent()) {
            Level maxCodeLevel = maxCodeLevelOpt.get();
            if (maxCodeLevel.getPoints() >= levelDto.getPoints()) {
                throw new PointsValidationException("A level with a lower code cannot have more points.");
            }
        }
        Level newLevel = modelMapper.map(levelDto, Level.class);
        Level savedLevel = levelRepository.save(newLevel);

        return modelMapper.map(savedLevel, LevelDto.class);
    }

    @Override
    public List<LevelDto> getAll() {
        List<Level> levels = levelRepository.findAll();
        return levels.stream()
                .map(level -> modelMapper.map(level, LevelDto.class))
                .toList();
    }

    @Override
    public LevelDto update(Integer integer, LevelDto levelDto) {
        Level existingLevel = levelRepository.findById(integer)
                .orElseThrow(() -> new ResourceNotFoundException("The level with ID " + integer + " does not exist"));
        if (levelDto.getPoints() < existingLevel.getPoints()) {
            throw new PointsValidationException("A level cannot have fewer points than its current value.");
        }
        existingLevel.setDescription(levelDto.getDescription());
        existingLevel.setPoints(levelDto.getPoints());
        Level updatedLevel = levelRepository.save(existingLevel);
        return modelMapper.map(updatedLevel, LevelDto.class);
    }


    @Override
    public void delete(Integer integer) {
        Level level = levelRepository.findById(integer).orElseThrow(()
                -> new ResourceNotFoundException("The level with id " + integer + " does not exist"));
        levelRepository.delete(level);
    }

    @Override
    public LevelDto findByID(Integer integer) {
        Level level = levelRepository.findById(integer)
                .orElseThrow(() -> new ResourceNotFoundException("The level with ID " + integer + " does not exist"));

        return modelMapper.map(level, LevelDto.class);
    }
}
