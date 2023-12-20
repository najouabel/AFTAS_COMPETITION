package com.app.aftas.services;

import com.app.aftas.dtos.Dto.LevelDto;
import com.app.aftas.controllers.Common.ServiceInterface;
import org.springframework.stereotype.Repository;

@Repository
public interface LevelService extends ServiceInterface<LevelDto, Integer> {
}
