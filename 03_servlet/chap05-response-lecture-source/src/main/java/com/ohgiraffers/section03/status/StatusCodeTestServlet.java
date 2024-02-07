package com.ohgiraffers.section03.status;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet("/status")
public class StatusCodeTestServlet extends HttpServlet {

    public StatusCodeTestServlet() {
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 404라는 상태 코드 값과 메시지를 던질 수 있음
        // 서버 측에서 예외 발생시키는 느낌이라고 이해하기
//        resp.sendError(404, "없는 페이지입니다. 경로를 확인해 주세요.");
        resp.sendError(500, "서버 내부 오류입니다. 서버 오류는 서버 개발자의 잘못이고, 개발자는 여러분입니다.");
    }
}
