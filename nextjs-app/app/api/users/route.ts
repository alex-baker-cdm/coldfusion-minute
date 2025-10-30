import { NextRequest, NextResponse } from 'next/server';
import { getAllUsers, createUser, getUserCount } from '@/app/lib/db';
import { ApiResponse, User } from '@/app/lib/types';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get('page') || '1');
  const pagesize = parseInt(searchParams.get('pagesize') || '10');
  const searchterm = searchParams.get('searchterm') || undefined;

  const users = getAllUsers(page, pagesize, searchterm);
  const count = getUserCount(searchterm);
  const lastPage = Math.ceil(count / pagesize);

  const response: ApiResponse<User[]> = {
    data: users,
    count,
    page,
    pagesize,
    lastPage
  };

  return NextResponse.json(response);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (!body.login || body.login.trim() === '') {
      return NextResponse.json(
        { error: 'Login cannot be empty' },
        { status: 400 }
      );
    }
    
    if (!body.firstname || body.firstname.trim() === '') {
      return NextResponse.json(
        { error: 'Firstname cannot be empty' },
        { status: 400 }
      );
    }
    
    if (!body.lastname || body.lastname.trim() === '') {
      return NextResponse.json(
        { error: 'Lastname cannot be empty' },
        { status: 400 }
      );
    }

    const user = createUser({
      login: body.login,
      firstname: body.firstname,
      lastname: body.lastname,
      description: body.description || '',
      level: body.level || 0
    });

    return NextResponse.json({ data: user }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}
