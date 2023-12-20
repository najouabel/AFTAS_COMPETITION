package com.app.aftas.dtos.responseDto;

import com.app.aftas.dtos.Dto.MemberDto;
import com.app.aftas.dtos.Dto.CompetitionDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class SingleHuntDto {
    private int id;
    private int numberOfFish;
    private FishDtoResponse fish;
    private MemberDto member;
    private CompetitionDto competition;
}
