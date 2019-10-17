<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"></xsl:output>
    
    <xsl:template match="/">
        <xsl:result-document href="website/index.html">
            <html>
                <head>
                    <meta charset="UTF-8"/>
                    <title>Arqueossítios do Nordeste Português</title>
                </head>
                <body>
                    <h1>Índice de Arqueossítios</h1>
                    <ol>
                        <xsl:apply-templates/>
                    </ol>
                </body>
            </html>
            
        </xsl:result-document>
        
        <xsl:apply-templates mode="individual"/>
    </xsl:template>
    
    <xsl:template match="ARQELEM" mode="individual">
        <xsl:result-document href="website/{generate-id()}.html">
            <html>
                <head>
                    <meta charset="UTF-8"/>
                    <title><xsl:value-of select="IDENTI"/></title>
                    <style>
                        table {
                        border-collapse: collapse;
                        }

                        th,tr {
                        padding: 10px;
                        text-align: left;
                        border-bottom: 1px solid grey;
                        }
                    </style>
                </head>
                <body style="font-family: Cambria">
                    <h1> <xsl:value-of select="IDENTI"/></h1>
                    <address style="text-align:center">
                        <a href="index.html#{generate-id()}">Voltar</a>
                    </address>
                    <table>
                        <tr>
                            <th>Tipo:</th><td><xsl:value-of select="TIPO/@ASSUNTO"/></td>
                        </tr>
                        
                        <xsl:choose>
                            <xsl:when test="CRONO">
                                <tr>
                                    <th>Cronologia:</th><td><xsl:value-of select="CRONO"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <tr>
                            <th>Lugar:</th><td><xsl:value-of select="LUGAR"/></td>
                        </tr>
                        <tr>
                            <th>Freguesia:</th><td><xsl:value-of select="FREGUE"/></td>
                        </tr>
                        <tr>
                            <th>Conselho:</th><td><xsl:value-of select="CONCEL"/></td>
                        </tr>
                        
                        <xsl:choose>
                            <xsl:when test="LATITU">
                                <tr>
                                    <th>Latitude:</th><td><xsl:value-of select="LATITU"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <xsl:choose>
                            <xsl:when test="LONGIT">
                                <tr>
                                    <th>Longitude:</th><td><xsl:value-of select="LONGIT"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <xsl:choose>
                            <xsl:when test="ALTITU">
                                <tr>
                                    <th>Altitude:</th><td><xsl:value-of select="ALTITU"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                         
                        <tr>
                            <th>Descrição:</th><td><xsl:value-of select="DESCRI"/></td>
                        </tr>
   
                        <xsl:choose>
                            <xsl:when test="ACESSO">
                                <tr>
                                    <th>Acesso:</th><td><xsl:value-of select="ACESSO"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <xsl:choose>
                            <xsl:when test="QUADRO">
                                <tr>
                                    <th>Quadro:</th><td><xsl:value-of select="QUADRO"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <xsl:choose>
                            <xsl:when test="TRAARQ">
                                <tr>
                                    <th>Trabalhos no Arqueossítio:</th><td><xsl:value-of select="TRAARQ"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>

                        <tr>
                            <th>Descrição do Arqueossítio:</th><td><xsl:value-of select="DESARQ"/></td>
                        </tr>
                        
                        <xsl:choose>
                            <xsl:when test="INTERP">
                                <tr>
                                    <th>Interp:</th><td><xsl:value-of select="INTERP"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <xsl:choose>
                            <xsl:when test="DEPOSI">
                                <tr>
                                    <th>Depósito:</th><td><xsl:value-of select="DEPOSI"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                       
                        <xsl:choose>
                            <xsl:when test="INTERE">
                                <tr>
                                    <th>Interesse:</th><td><xsl:value-of select="INTERE"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <tr>
                            <th>Bibliografia:</th><td><xsl:value-of select="BIBLIO"/></td>
                        </tr>
                        <tr>
                            <th>Autor:</th><td><xsl:value-of select="AUTOR"/></td>
                        </tr>
                        <tr>
                            <th>Data:</th><td><xsl:value-of select="DATA"/></td>
                        </tr>
                    </table>
   
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>
    
    <xsl:template match="ARQELEM">
        <li id="{generate-id()}">
            <a href="{generate-id()}.html"> <xsl:value-of select="IDENTI"/></a>
        </li>
    </xsl:template>
    
</xsl:stylesheet>