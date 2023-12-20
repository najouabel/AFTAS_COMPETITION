package com.app.aftas.dtos.responseDto;

import com.app.aftas.dtos.Dto.CompetitionDto;
import com.app.aftas.dtos.Dto.MemberDto;
import com.app.aftas.dtos.Dto.FishDto;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class CompetitionHuntDto {
    private Integer id;
    private Integer numberOfFish;
    private FishDto fish;
    private MemberDto member;

    @JsonIgnore
    private CompetitionDto competition;
}
