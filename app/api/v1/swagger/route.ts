import { NextRequest, NextResponse } from "next/server";
import { swaggerUiSetup } from "@/lib/swagger";

export async function GET(request: NextRequest): Promise<NextResponse> {
    return NextResponse.json(swaggerUiSetup, {
        headers: {
            "Content-Type": "application/json",
        },
    })
}