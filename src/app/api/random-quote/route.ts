import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://dummyjson.com/quotes');
  const data = await res.json();
  //console.log("Json file fetched", data)

  return NextResponse.json(data);
    
  } catch (error) {
    console.log("Failed to fetch quotes", error)

    NextResponse.json(
        {
            error: "Failed to fetch quotes"
        },
        {
            status:500
        }
    )
    
  }
}
