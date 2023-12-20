package com.app.aftas.controllers;

import com.app.aftas.services.Impl.CompetitionServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import com.app.aftas.dtos.Dto.CompetitionDto;
import com.app.aftas.services.CompetitionService;
import com.app.aftas.controllers.Common.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;


@CrossOrigin(origins = "http://localhost:4200")

@RestController
@Validated
@RequestMapping(path = "api/competitions", produces = MediaType.APPLICATION_JSON_VALUE)
public class CompetitionController extends Controller<CompetitionDto, String> {

    private final CompetitionService competitionService;

    @Autowired
    public CompetitionController(CompetitionService competitionService) {
        this.competitionService = competitionService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<CompetitionDto>> getAllCompetitions(@RequestParam(defaultValue = "0") final Integer page, @RequestParam(defaultValue = "10") final Integer size) {
        return new ResponseEntity<>(competitionService.getAllCompetitions(page, size), HttpStatus.OK);
    }

    @GetMapping("/pagination")
    public Page<CompetitionDto> getPaginatedCompetitions(Pageable pageable){
        System.out.println(competitionService.getAllCompetitionsPaginated(pageable));
        return competitionService.getAllCompetitionsPaginated(pageable);
    }

}
