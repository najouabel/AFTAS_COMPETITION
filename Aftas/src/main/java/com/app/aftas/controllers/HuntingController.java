package com.app.aftas.controllers;

import com.app.aftas.dtos.responseDto.HuntFishNbrDto;
import com.app.aftas.dtos.responseDto.SingleHuntDto;
import com.app.aftas.dtos.responseDto.SpecificHuntDto;
import com.app.aftas.dtos.Dto.HuntingDto;
import com.app.aftas.services.HuntingService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/hunting")
@Validated
public class HuntingController {
    @Autowired
    private HuntingService huntingService;
    @PostMapping
    public ResponseEntity<SingleHuntDto> createHunt(@Valid @RequestBody  HuntingDto huntDto){
        return ResponseEntity.status(HttpStatus.CREATED).body(
                huntingService.createHunt(huntDto)
        );
    }

    @GetMapping
    public ResponseEntity<List<SingleHuntDto>> getAll(){
        return ResponseEntity.status(HttpStatus.OK).body(
                huntingService.getHunts()
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteById(@PathVariable Integer id){
        huntingService.deleteById(id);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Hunting deleted successfully.");
        response.put("deletedElementIdentifier", id.toString());
        return new ResponseEntity<>(response ,HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<SingleHuntDto> editNumberOfFish(@PathVariable int id, @RequestBody @Valid HuntFishNbrDto HuntNbrDTO){
        return ResponseEntity.status(HttpStatus.OK).body(
                huntingService.updateNumberOfFish(id, HuntNbrDTO.getNumberOfFish())
        );
    }


}
