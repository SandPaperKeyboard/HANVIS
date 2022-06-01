import React, { Component } from 'react';
import axios from 'axios';
import Header from "../component/Header";
import Footer from '../component/Footer';

//import Starter from '../component/Starter';

class College extends Component {
    constructor(props)
    {
        super(props);
        this.start = {};

        const query = new URLSearchParams(props.location.search);
        const num = query.get('num');           // query string 으로 num 값 얻음

        this.state = {
            num: num || 'a',         // 디폴트로 a
            collegeList : []    // 기초 리스트는 비어있습니다.
        };
    }

    componentDidMount()
    {
        this._getList();
    }

    componentDidUpdate(preProps)
    {
        let prevQuery = new URLSearchParams(preProps.location.search);
        let prevNum = prevQuery.get('num');

        let query = new URLSearchParams(this.props.location.search);
        let num = query.get('num');

        if(prevNum !== num)
        {
            this.setState({ num })
        }
    }

    _getList()
    {
        // college_list를 가지고 옵니다.
        const apiUrl = "dummy/college_list.json";

        axios.get(apiUrl)
        .then(
            data => {
                // 가져온 리스트를 state에 저장합니다.
                this.setState({
                    collegeList : data.data.collegeList
                });
            }
        )
        .catch(
            error => {
                console.log(error);
            }
        );
    }

    render() {
        return (
            <>
                <Header />
                {
                    this.state.collegeList.length > 0 ? (                               //위에 19줄에 나오는 const collegeList
                        <collegeList list={
                            this.state.collegeList.filter( college => (
                                    college.num === this.state.num
                                )
                            )
                        }
                        />
                    ) : (
                        <span>
                            LOADING...
                        </span>
                    )
                }
                <Footer />            </>
        )
    }
}

export default College;



/*
import React, { Component } from 'react';
import axios from 'axios';

import Header from "../component/Header";
import Gnb from "../component/Gnb";
import Footer from "../component/Footer";
import WebtoonList from "../component/WebtoonList"

class Main extends Component {

    constructor(props)
    {
        super(props);

        const query = new URLSearchParams(props.location.search);
        const day = query.get('day');           // query string 으로 day 값 얻음

        this.state = {
            day: day || 'mon',         // 디폴트로 월요일
            webtoonList : []    // 기초 리스트는 비어있습니다.
        };
    }

    componentDidMount()
    {
        this._getList();
    }

    componentDidUpdate(preProps)
    {
        // 요일이 바뀌면 다시 setState 처리
        let prevQuery = new URLSearchParams(preProps.location.search);
        let prevDay = prevQuery.get('day');

        let query = new URLSearchParams(this.props.location.search);
        let day = query.get('day');

        if(prevDay !== day)
        {
            this.setState({ day })
        }
    }

    _getList()
    {
        // webtoon_list를 가지고 옵니다.
        const apiUrl = "dummy/webtoon_list.json";

        axios.get(apiUrl)
        .then(
            data => {
                // 가져온 리스트를 state에 저장합니다.
                this.setState({
                    webtoonList : data.data.webtoonList
                });
            }
        )
        .catch(
            error => {
                console.log(error);
            }
        );
    }

    render() {
        return (
            <div>
                <Header />
                <Gnb />
                {
                    this.state.webtoonList.length > 0 ? (
                        <WebtoonList list={
                            this.state.webtoonList.filter( webtoon => (
                                    webtoon.day === this.state.day
                                )
                            )
                        }
                        />
                    ) : (
                        <span>
                            LOADING...
                        </span>
                    )
                }
                <Footer />
            </div>
        )
    }
}

export default Main;
*/