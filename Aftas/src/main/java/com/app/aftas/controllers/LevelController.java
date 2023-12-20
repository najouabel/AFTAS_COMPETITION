package com.app.aftas.controllers;

import com.app.aftas.dtos.Dto.LevelDto;
import com.app.aftas.controllers.Common.Controller;
import org.springframework.http.MediaType;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "api/levels", produces = MediaType.APPLICATION_JSON_VALUE)
@Validated
public class LevelController extends Controller<LevelDto, Integer> {

}
