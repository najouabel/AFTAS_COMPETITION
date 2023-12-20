package com.app.aftas.dtos.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class LevelDto {
    private Integer code;
    private String description;
    private Integer points;
}
