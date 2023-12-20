package com.app.aftas.services;

import com.app.aftas.dtos.Dto.FishDto;
import com.app.aftas.dtos.responseDto.FishDtoResponse;

import java.util.List;

public interface FishService {

    FishDto save(FishDto levelDto);

    void delete(String id);

    List<FishDtoResponse> getAll();

    FishDtoResponse findByID(String id);

    FishDto update(String id, FishDto levelDto);
}
