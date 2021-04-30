package com.veezean.codereview.server.repository;

import com.veezean.codereview.server.entity.UserProjectBindingsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * <类功能简要描述>
 *
 * @author Wang Weiren
 * @since 2021/4/26
 */
@Repository
public interface UserProjectBindingsRepository extends JpaRepository<UserProjectBindingsEntity, Long> {
    List<UserProjectBindingsEntity> findAllByUserId(String userId);
}
