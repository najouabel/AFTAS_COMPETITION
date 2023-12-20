package com.app.aftas.services;

import java.util.List;

import com.app.aftas.dtos.Dto.CompetitionDto;
import com.app.aftas.controllers.Common.ServiceInterface;
import com.app.aftas.models.Competition;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CompetitionService extends ServiceInterface<CompetitionDto, String> {

    List<CompetitionDto> getAllCompetitions(final Integer page, final Integer size);
    Page<CompetitionDto> getAllCompetitionsPaginated(Pageable pageable);

}
