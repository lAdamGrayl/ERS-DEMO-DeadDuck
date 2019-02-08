package com.spark.ex.data;

import com.spark.ex.pojos.User;
import com.spark.ex.util.ConnectionUtil;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserDaoImpl implements UserDao {
    @Override
    public User getByEmail(String email) {
        Connection connection = null;
        User u = null;

        try {
            connection = ConnectionUtil.getConnectionManager().newConnection();

            String sql = "select id, first_name, last_name, email, password, role_name from ers.users\n" +
                    "\tjoin ers.user_roles\n" +
                    "\ton ers.users.id = ers.user_roles.user_id\n" +
                    "\tgroup by ers.users.email, ers.users.id, ers.user_roles.user_id, ers.user_roles.role_name\n" +
                    "\thaving email = ?";
            PreparedStatement ps = connection.prepareStatement(sql);
            ps.setString(1, email);

            ResultSet rs = ps.executeQuery();

            while(rs.next()) {
                u = new User();
                u.setId(rs.getInt("id"));
                u.setFirstName(rs.getString("first_name"));
                u.setLastName(rs.getString("last_name"));
                u.setEmail(rs.getString("email"));
                u.setPassword(rs.getString("password"));
                u.getRoles().add(rs.getString("role_name"));
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return u;
    }
}
