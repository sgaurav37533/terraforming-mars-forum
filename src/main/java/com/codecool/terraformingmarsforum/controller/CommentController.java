package com.codecool.terraformingmarsforum.controller;

import com.codecool.terraformingmarsforum.model.Comment;
import com.codecool.terraformingmarsforum.service.CommentService;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.exc.MismatchedInputException;
import com.fasterxml.jackson.databind.exc.ValueInstantiationException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

@RestController
@RequestMapping("/api/comments")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @PostMapping("")
    public ResponseEntity<Comment> createComment(@RequestBody Comment comment) throws URISyntaxException {
        int id = commentService.createComment(comment);
        return ResponseEntity.created(new URI(String.format("/api/comments/%d", id))).body(comment);
    }

    @ExceptionHandler(ValueInstantiationException.class)
    public ResponseEntity<String> handleValueInstantiationException(ValueInstantiationException exception) {
        return ResponseEntity.badRequest().body(exception.getCause().getMessage());
    }

    @ExceptionHandler(MismatchedInputException.class)
    public ResponseEntity<String> handleMismatchedInputException(MismatchedInputException exception) {
        return ResponseEntity.badRequest().body(exception.getOriginalMessage());
    }

    @ExceptionHandler(JsonParseException.class)
    public ResponseEntity<String> handleJsonParseException(JsonParseException exception) {
        return ResponseEntity.badRequest().body(exception.getOriginalMessage());
    }
}
