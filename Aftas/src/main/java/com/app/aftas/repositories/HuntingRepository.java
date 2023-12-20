package com.app.aftas.repositories;

import com.app.aftas.models.Hunting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HuntingRepository extends JpaRepository<Hunting, Integer> {
    boolean existsHuntingByFishNameAndMemberNumAndCompetitionCode(String name, int number, String code);
    Hunting findHuntingByFishNameAndMemberNumAndCompetitionCode(String name, int number, String code);
    List<Hunting> findHuntingByCompetitionCodeAndMemberNum(String code, int num);
}
