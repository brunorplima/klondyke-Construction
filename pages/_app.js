import { useState } from 'react'
import '../src/style/global.css';

export default function App({ Component, pagePprops }) {

   return <Component {...pagePprops} />
}