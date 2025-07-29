import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { TRIAL_DURATION_DAYS } from "@/lib/trial-utils";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, name } = body;

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, 12);

    // Calculate trial dates
    const trialStarted = new Date();
    const trialEnds = new Date(
      Date.now() + TRIAL_DURATION_DAYS * 24 * 60 * 60 * 1000
    );

    // Create user with trial info
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        trialStarted,
        trialEnds,
        isTrialUsed: false,
      },
    });

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Signup error:", error);

    // Handle Prisma-specific errors
    if (error?.code === "P2002") {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Error creating user" },
      { status: 500 }
    );
  }
}
