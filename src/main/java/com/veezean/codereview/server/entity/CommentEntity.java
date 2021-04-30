package com.veezean.codereview.server.entity;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

/**
 * <类功能简要描述>
 *
 * @author Wang Weiren
 * @since 2021/4/26
 */
@Entity
@Table(name = "comment", schema = "code_review", catalog = "")
@Data
@EntityListeners(value = AuditingEntityListener.class)
public class CommentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String projectKey;
    private String commitUser;
    private String updateUser;
    @CreatedDate
    private Date createTime;
    @LastModifiedDate
    private Date updateTime;

    private long identifier;
    private String reviewer;
    private String handler; // 确认人
    private String comments;
    private String filePath;
    /**
     * start ~ end的格式，用于显示 运算的时候，行号是从0计算的，因此显示的时候，start和end在实际下标上+1
     */
    private String lineRange;
    private int startLine;
    private int endLine;
    private String content;
    private String type;
    private String severity;
    private String factor;
    private String dateTime;
    private String projectVersion; // 项目版本
    private String belongIssue; // 相关需求

    private String confirmResult; // 确认结果， 未确认，已修改，待修改，拒绝
    private String confirmNotes; // 确认备注
}
