package com.app.aftas.dtos.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FishDto {

    private String name;
    private Double averageWeight;
    private Integer level_id;

}
