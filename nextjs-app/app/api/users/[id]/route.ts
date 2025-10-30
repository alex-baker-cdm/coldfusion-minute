import { NextRequest, NextResponse } from 'next/server';
import { getUserById, updateUser, deleteUser } from '@/app/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const userId = parseInt(id);
  
  const user = getUserById(userId);
  
  if (!user) {
    return NextResponse.json(
      { error: 'User not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json({ data: user });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const userId = parseInt(id);
    const body = await request.json();
    
    if (body.login !== undefined && body.login.trim() === '') {
      return NextResponse.json(
        { error: 'Login cannot be empty' },
        { status: 400 }
      );
    }
    
    if (body.firstname !== undefined && body.firstname.trim() === '') {
      return NextResponse.json(
        { error: 'Firstname cannot be empty' },
        { status: 400 }
      );
    }
    
    if (body.lastname !== undefined && body.lastname.trim() === '') {
      return NextResponse.json(
        { error: 'Lastname cannot be empty' },
        { status: 400 }
      );
    }
    
    const user = updateUser(userId, body);
    
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ data: user });
  } catch {
    return NextResponse.json(
      { error: 'Failed to update user' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const userId = parseInt(id);
  
  const success = deleteUser(userId);
  
  if (!success) {
    return NextResponse.json(
      { error: 'User not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json({ success: true });
}
