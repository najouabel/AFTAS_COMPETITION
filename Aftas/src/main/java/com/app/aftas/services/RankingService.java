package com.app.aftas.services;

import java.util.List;

import com.app.aftas.dtos.Dto.RankingDto;
import com.app.aftas.models.embeddables.CompetitionMember;
import com.app.aftas.controllers.Common.ServiceInterface;

public interface RankingService extends ServiceInterface<RankingDto, CompetitionMember> {
    List<RankingDto> SetUpCompetitionRankings(String competitionCode);

    List<RankingDto> getCompetitionRankings(String identifier);

}
