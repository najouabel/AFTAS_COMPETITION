package com.app.aftas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.aftas.models.embeddables.CompetitionMember;
import com.app.aftas.models.Ranking;
import org.springframework.stereotype.Repository;

@Repository
public interface RankingRepository extends JpaRepository<Ranking, CompetitionMember> {

    List<Ranking> findByCompetitionCode(String competitionCode);

    Integer countByCompetitionCode(String code);
}
