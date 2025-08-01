import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Configuration - vous pouvez modifier ces valeurs
  const USERNAME = process.env.AUTH_USERNAME || 'admin'
  const PASSWORD = process.env.AUTH_PASSWORD || 'pneumo2025'
  
  // Récupérer l'en-tête d'autorisation
  const basicAuth = request.headers.get('authorization')

  // Si pas d'authentification, demander les identifiants
  if (!basicAuth) {
    return new NextResponse('Authentification requise', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Zone sécurisée", charset="UTF-8"'
      }
    })
  }

  // Décoder et vérifier les identifiants
  try {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = Buffer.from(authValue, 'base64').toString().split(':')
    
    // Vérifier les identifiants
    if (user === USERNAME && pwd === PASSWORD) {
      // Authentification réussie, continuer
      return NextResponse.next()
    } else {
      // Identifiants incorrects
      return new NextResponse('Identifiants incorrects', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Zone sécurisée", charset="UTF-8"'
        }
      })
    }
  } catch (error) {
    // Erreur de décodage
    return new NextResponse('Erreur d\'authentification', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Zone sécurisée", charset="UTF-8"'
      }
    })
  }
}

// Configuration des routes à protéger
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'
  ]
}