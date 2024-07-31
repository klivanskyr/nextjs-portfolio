import { NextRequest, NextResponse } from "next/server";

/**
 * @openapi
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
    return NextResponse.json({ 
        message: "Hello, World!"
    }, {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        },
        statusText: "OK"
    });
}