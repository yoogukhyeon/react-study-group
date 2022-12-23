import React from 'react';
//axios import error
import Http from 'Api';
import MetaTag from '../constants/SEOMetaTag';

//https://mia-dahae.tistory.com/137
function Board() {
    return (
        <>
            <MetaTag title="게시판" description="게시판 목록" />
            <div>Board</div>
            {/* 어떻게 불러옴 다 샘플 코드 다 제각각이던데 ㅋㅋ */}
            <div>{}</div>

        </>
    );
}

export default Board;
