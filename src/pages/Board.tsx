import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MetaTag from '../constants/SEOMetaTag';

function Board() {
    const [list, setList] = useState<any[]>([]);

    const url = 'http://localhost:8080/boards';

    async function doRequest() {
        const result = await axios.get(url);

        if (result.status === 200) {
            setList(result.data);
        }
    }

    useEffect(() => {
        doRequest(); //첫 렌더링시 비동기 axios 호출
    }, []); //react hooks에 useEffect 첫 렌더링에만 불려짐

    console.log('list ::', list);

    return (
        <>
            <MetaTag title="게시판" description="게시판 목록" />
            <div>Board</div>
            {/* 어떻게 불러옴 다 샘플 코드 다 제각각이던데 ㅋㅋ */}
            <div>
                <ul>
                    {list?.map((val, idx) => {
                        console.log('val ::', val);
                        return (
                            <li key={val.id}>
                                <div>이름: {val.nickName}</div>
                                <div>제목: {val.title}</div>
                                <div>조회수: {val.views}</div>
                                <div>좋아요: {val.likes}</div>
                                <br />
                                <br />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default Board;
