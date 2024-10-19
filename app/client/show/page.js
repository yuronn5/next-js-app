// 'use client'

// import { useState } from "react";
import Link from "next/link";

export default function Show() {
    return (
      <div>
        Show page
        <Link href="/">Main page</Link><br/>
        <Link href="/client/12345">Client 12345</Link>
      </div>
    );
  }
  