import graph from "./images/graph.png";
import primes from "./images/primes.jpg";
import sort from "./sort.png";
import queen from "./images/queen.PNG";
import binSearch from "./images/binaryTree.png";
import convex from './images/convexHull.png';
import puzzle from './images/15puzzle.PNG';
import turing from './images/turing.jpg';
import Recursion from './images/Recursion.jpg';
export function getDetails(){
   return [
       {
           id:1,
           title:"Pathfinder",
           description:"Visualize graph algorithms like dijkstra, BFS, DFS",
           route:"/pathfinder",
           img:graph
       },
       {
           id:2,
           title:"Recursion Tree",
           description:"The process in which a function calls itself directly or indirectly is called recursion. Work in progress",
           route:"/graph",
           img:Recursion
       }
       

   ]
}