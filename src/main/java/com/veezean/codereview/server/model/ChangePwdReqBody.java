package com.veezean.codereview.server.model;

import lombok.Data;

/**
 * <类功能简要描述>
 *
 * @author Wang Weiren
 * @since 2023/3/23
 */
@Data
public class ChangePwdReqBody {
    private String originalPwd;
    private String newPwd;
}