package com.app.aftas.dtos.Dto;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import com.app.aftas.dtos.responseDto.CompetitionHuntDto;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor


public class CompetitionDto {

    private String code;
    private LocalDate date;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private Integer numberOfParticipants;
    private String location;
    private Double amount;
    
    @JsonIgnoreProperties("competition")
    private List<RankingDto> rankings;

    @JsonIgnoreProperties("competition")
    private List<CompetitionHuntDto> huntings;
}
