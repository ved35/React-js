import React from "react";
import ListItem from "../listitem/ListItem";
import './List.css'

import thor from '../images/thor3.webp';
import venom from '../images/venom.webp';
import spider from '../images/spider-man.webp';
import spider2 from '../images/spider-man2.webp';
import spider3 from '../images/spider-man3.webp';
import shang from '../images/shang-chi.webp';
import ant from '../images/Ant-man.webp';
import ant2 from '../images/Ant-man2.webp';
import black from '../images/black-panther.webp';
import black2 from '../images/black-panther2.webp';
import loki from '../images/loki.webp';
import missmarvel from '../images/miss-marvel.webp';
import cap from '../images/caption-marvel.webp';
import deadpool from '../images/deadpool.webp';
import deadpool2 from '../images/deadpool2.webp';

const List = () => {
    return (
        <div className="List">
            <div className="watch">
                Watch Marvel Movies---
            </div>
            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="item">
                            <ListItem img={thor} />
                            <ListItem img={ant} />
                            <ListItem img={ant2} />
                            <ListItem img={black} />
                            <ListItem img={black2} />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="item">
                            <ListItem img={venom} />
                            <ListItem img={cap} />
                            <ListItem img={missmarvel} />
                            <ListItem img={deadpool} />
                            <ListItem img={deadpool2} /> 
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="item">
                            <ListItem img={spider} />
                            <ListItem img={spider2} />
                            <ListItem img={spider3} />
                            <ListItem img={loki} />
                            <ListItem img={shang} />
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev prev-ba" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next prev-ba" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span className="carousel-control-next-icon next" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export default List