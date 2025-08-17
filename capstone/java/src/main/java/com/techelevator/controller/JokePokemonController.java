package com.techelevator.controller;

import com.techelevator.dao.JokeDao;
import com.techelevator.dao.PokemonDao;
import com.techelevator.dao.UserDao;
import com.techelevator.model.Joke;
import com.techelevator.model.User;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@CrossOrigin
@PreAuthorize("isAuthenticated()")
public class JokePokemonController {

    private JokeDao jokeDao;
    private PokemonDao pokemonDao;
    private UserDao userDao;

    public JokePokemonController(JokeDao jokeDao, PokemonDao pokemonDao, UserDao userDao) {
        this.jokeDao = jokeDao;
        this.pokemonDao = pokemonDao;
        this.userDao = userDao;
    }

    @PostMapping(path = "/joke")
    public Joke saveJoke(@RequestBody Joke joke, Principal principal){
        int userId = userDao.getUserByUsername(principal.getName()).getId();
        jokeDao.saveJoke(joke.getJoke(), userId);
        return joke;

    }
}
