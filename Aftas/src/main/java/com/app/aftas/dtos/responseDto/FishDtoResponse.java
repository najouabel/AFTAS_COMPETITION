package com.app.aftas.dtos.responseDto;

import com.app.aftas.dtos.Dto.LevelDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FishDtoResponse {

    private String name;
    private Double averageWeight;
    private LevelDto level;
}
