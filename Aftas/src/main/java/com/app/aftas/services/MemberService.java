package com.app.aftas.services;

import java.util.List;

import com.app.aftas.dtos.Dto.MemberDto;
import com.app.aftas.controllers.Common.ServiceInterface;

public interface MemberService extends ServiceInterface<MemberDto, Integer> {

    List<MemberDto> getByName(String name);
}
