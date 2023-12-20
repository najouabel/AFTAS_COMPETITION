package com.app.aftas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.app.aftas.dtos.Dto.MemberDto;
import com.app.aftas.services.MemberService;
import com.app.aftas.controllers.Common.Controller;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "api/members", produces = MediaType.APPLICATION_JSON_VALUE)
@Validated
public class MemberController extends Controller<MemberDto, Integer> {

    private MemberService memberService;

    @Autowired
    public void setMemberService(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<List<MemberDto>> getMembersByName(@PathVariable("name") String name) {
        return new ResponseEntity<>(memberService.getByName(name), HttpStatus.OK);
    }

}
