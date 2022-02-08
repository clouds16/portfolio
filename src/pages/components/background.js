import React , {useState} from 'react'
import './background.css'

function DynamicBackground(){
    return (
        <div class="group-art">
        <div class="sky">
            <div class="sun"></div>
            <div class="cloud c01"></div>
            <div class="cloud c02"></div>
            <div class="cloud c03"></div>
            <div class="cloud c04"></div>
            <div class="cloud c05"></div>
        </div>
        <div class="ground">
            <div class="line l01"></div>
            <div class="line l02"></div>
            <div class="line l03"></div>
            <div class="line l04"></div>
            <div class="line l05"></div>
            <div class="line l06"></div>
            <div class="line l07"></div>
            <div class="line l08"></div>
            <div class="line l09"></div>
            <div class="line l10"></div>

            <div class="top-hline"></div>
            <div class="hline h01"></div>
            <div class="hline h02"></div>
            <div class="hline h03"></div>
            <div class="hline h04"></div>
        </div>
        </div>
    )
}

export default DynamicBackground;