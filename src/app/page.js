"use client"

import { TopicChose } from "@/components/sections/TopicChose";
import {TopicChoseForPart2} from "@/components/sections/TopicChoseForPart2";
import {Result} from "@/components/sections/Result";

export default function Home() {

    const part1 = [
        {
            question: "What is the role of a firewall in computer security?",
            answer: "Lorem lorem lorem lorem lorem lorem",
            topic: "HTML"
        },
        {
            question: "What is the difference between RAM and ROM in a computer system?",
            answer: "Lorem lorem",
            topic: "CSS"
        },
        {
            question: "What is the role of a firewall in computer security?",
            answer: "Lorem lorem",
            topic: "JS"
        },
        {
            question: "What is the difference between RAM and ROM in a computer system?",
            answer: "Lorem lorem",
            topic: "HTML"
        },
        {
            question: "What is the role of a firewall in computer security?",
            answer: "Lorem lorem",
            topic: "HTML"
        },
        {
            question: "What is the role of a firewall in computer security?",
            answer: "Lorem lorem",
            topic: "HTML"
        },
        {
            question: "What is the role of a firewall in computer security?",
            answer: "Lorem lorem",
            topic: "HTML"
        },
        {
            question: "What is the role of a firewall in computer security?",
            answer: "Lorem lorem",
            topic: "HTML"
        },{
            question: "What is the role of a firewall in computer security?",
            answer: "Lorem lorem",
            topic: "HTML"
        },
        {
            question: "What is the role of a firewall in computer security?",
            answer: "Lorem lorem",
            topic: "HTML"
        },
        {
            question: "What is the role of a firewall in computer security?",
            answer: "Lorem lorem",
            topic: "HTML"
        },
        {
            question: "What is the role of a firewall in computer security?",
            answer: "Lorem lorem",
            topic: "HTML"
        },
        {
            question: "What is the role of a firewall in computer security?",
            answer: "Lorem lorem",
            topic: "HTML"
        },

    ]

    const part2 = [
        {
            question: "What is the role of a firewall in computer security?",
            answer: "Lorem lorem",
            topic: "HTML"
        },
        {
            question: "What is the difference between RAM and ROM in a computer system?",
            answer: "Lorem lorem",
            topic: "HTML"
        },
        {
            question: "What is the role of a firewall in computer security?",
            answer: "Lorem lorem",
            topic: "HTML"
        },
        {
            question: "What is the difference between RAM and ROM in a computer system?",
            answer: "Lorem lorem",
            topic: "HTML"
        },
    ]

    const part3 = [
        {
            question: "What is the role of a firewall in computer security?",
            answer: "Lorem lorem",
            topic: "HTML",
            type: "30"
        },
        {
            question: "What is the difference between RAM and ROM in a computer system?",
            answer: "Lorem lorem",
            topic: "HTML",
            type: "20"
        },
        {
            question: "What is the role of a firewall in computer security?",
            answer: "Lorem lorem",
            topic: "HTML",
            type: "30"
        },
        {
            question: "What is the difference between RAM and ROM in a computer system?",
            answer: "Lorem lorem",
            topic: "HTML",
            type: "20"
        },
    ]

    const part4 = [
        {
            question: "What is the role of a firewall in computer security?",
            answer: "Lorem lorem",
            topic: "HTML"
        },
        {
            question: "What is the difference between RAM and ROM in a computer system?",
            answer: "Lorem lorem",
            topic: "HTML"
        },
        {
            question: "What is the role of a firewall in computer security?",
            answer: "Lorem lorem",
            topic: "HTML"
        },
        {
            question: "What is the difference between RAM and ROM in a computer system?",
            answer: "Lorem lorem",
            topic: "HTML"
        },
    ]

  return (
    <div className="relative bg-yellow-500 px-40 ">
        <TopicChose />
        <TopicChoseForPart2 />
        <Result part="Part 1" data={part1} />
        <Result part="Part 2" data={part2} />
        <Result part="Part 3" data={part3} />
        <Result part="Part 4" data={part4} />
    </div>
  )
}
