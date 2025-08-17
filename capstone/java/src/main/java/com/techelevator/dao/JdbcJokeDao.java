package com.techelevator.dao;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcJokeDao implements JokeDao{

    private final JdbcTemplate jdbcTemplate;

    public JdbcJokeDao(DataSource dataSource) {

        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public void saveJoke(String text, int userId) {
        String sql = "INSERT INTO joke (joke_text, user_id)" +
                     " VALUES(?,?)";
        jdbcTemplate.update(sql, text, userId);
    }

    @Override
    public List<String> returnAllFavoriteJokes(int userId) {
        String sql = "SELECT joke_text FROM joke " +
                "WHERE user_id = ?";

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, userId);

        List<String> jokeList = new ArrayList<>();

        while(results.next()){
            String joke = results.getString("joke_text");
            jokeList.add(joke);
        }
        return jokeList;
    }
}
