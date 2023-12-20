package com.app.aftas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.aftas.models.Member;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Integer> {

    @Query("SELECT m FROM Member m WHERE m.name LIKE %:keyword% OR m.familyName LIKE %:keyword%")
    List<Member> findByNameOrFamilyNameContaining(@Param("keyword") String keyword);
    List<Member> findByFamilyNameContaining(String familyName);
}
