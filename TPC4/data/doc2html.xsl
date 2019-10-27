<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:template match="doc">
        <html>
            <head>
                <meta charset="UTF-8"/>
                <title><xsl:value-of select="tit"/></title>
                <style>
                    th,tr {
                    padding: 10px;
                    text-align: left;
                    }
                </style>
            </head>
            
            <body style="font-family: Cambria">
                <h3><xsl:value-of select="tit"/></h3>
                <table width="50%">
                    <xsl:choose>
                        <xsl:when test="musico">
                            <tr>
                                <th><b>Músico: </b></th>
                                <td><xsl:value-of select="musico"/></td>
                            </tr>
                        </xsl:when>
                    </xsl:choose>
                    
                    <tr>
                        <th><b>Província: </b></th>
                        <td><xsl:value-of select="prov"/></td>
                    </tr>
                 
                    <xsl:choose>
                        <xsl:when test="local">
                            <tr>
                                <th><b>Local: </b></th>
                                <td><xsl:value-of select="local"/></td>
                            </tr>
                        </xsl:when>
                    </xsl:choose>
                    
                    <xsl:choose>
                        <xsl:when test="obs">
                            <tr>
                                <th><b>Observações: </b></th>
                                <td>
                                    <xsl:apply-templates select="obs"/>
                                    <xsl:for-each select="obs/file">
                                        <tr>Ficheiro de aúdio: <i>[<xsl:value-of select="."/>]</i></tr>
                                    </xsl:for-each>
                                    <xsl:choose>
                                        <xsl:when test="obs/intxt">
                                            <tr><u><xsl:value-of select="obs/intxt"/></u></tr>
                                        </xsl:when>
                                    </xsl:choose>
                                </td>
                           </tr>                            
                        </xsl:when>
                    </xsl:choose>
                    
                    <xsl:choose>
                        <xsl:when test="duracao">
                            <tr>
                                <th><b>Duração: </b></th>
                                <td><xsl:value-of select="duracao"/></td>
                            </tr>
                        </xsl:when>
                    </xsl:choose>
           
                    <xsl:choose>
                        <xsl:when test="file">
                            <tr>
                                <th><b>Ficheiro audio: </b></th>
                                <td><i>[<xsl:value-of select="file"/>]</i></td>
                                
                            </tr>
                        </xsl:when>
                    </xsl:choose>
                </table>
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="obs/file"/>
    <xsl:template match="obs/intxt"/>
    
</xsl:stylesheet>