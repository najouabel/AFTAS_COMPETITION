package com.app.aftas.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.app.aftas.dtos.Dto.RankingDto;
import com.app.aftas.models.embeddables.CompetitionMember;
import com.app.aftas.services.RankingService;
import com.app.aftas.controllers.Common.Controller;

import lombok.AllArgsConstructor;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@AllArgsConstructor
@RequestMapping(path = "api/rankings", produces = MediaType.APPLICATION_JSON_VALUE)
@Validated
public class RankingController extends Controller<RankingDto, CompetitionMember> {

    private RankingService rankingService;

    @GetMapping("/competition/{code}/generate")
    public ResponseEntity<List<RankingDto>> setCompetitionRankings(@PathVariable("code") final String competitionCode) {
        return new ResponseEntity<>(
                rankingService.SetUpCompetitionRankings(competitionCode),
                HttpStatus.OK
        );
    }

    @GetMapping("/competition/{code}")
    public ResponseEntity<List<RankingDto>> getCompetitionRankings(@PathVariable("code") final String code) {
        return new ResponseEntity<>(
                rankingService.getCompetitionRankings(code),
                HttpStatus.OK
        );
    }



}