package com.codecool.terraformingmarsforum.model;

import lombok.Builder;
import lombok.Data;
import lombok.NonNull;

@Data
@Builder
public class Comment {

    private int id;
    @NonNull private String description;
    @NonNull private User user;
}
