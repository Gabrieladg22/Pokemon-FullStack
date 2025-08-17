package com.techelevator.dao;

import java.util.List;

public interface JokeDao {

    void saveJoke(String text, int userId);

    List<String> returnAllFavoriteJokes(int userId);

}
