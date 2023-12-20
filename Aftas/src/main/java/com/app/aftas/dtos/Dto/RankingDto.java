package com.app.aftas.dtos.Dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.app.aftas.models.embeddables.CompetitionMember;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor


public class RankingDto {
    
    private CompetitionMember id;
    private Integer rank;
    private Integer score;
    
    @JsonIgnore
    private CompetitionDto competition;
    
    @JsonIgnoreProperties("rankings")
    private MemberDto member;

}
