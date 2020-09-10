package com.javatechie.spring.auth.example;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

    public User(int i, String string, String string2, String string3) {
	}
	private int id;
    private String name;
    private String email;
    private String mobile;
}
