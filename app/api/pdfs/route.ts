import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const directoryPath = path.join(process.cwd(), 'public/pdfs');
  try {
    const files = fs.readdirSync(directoryPath).filter((file) => file.endsWith('.pdf'));
    return NextResponse.json(files);
  } catch (error) {
    return NextResponse.error();
  }
}
