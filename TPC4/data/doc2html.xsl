<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:template match="doc">
        <html>
            <head>
                <meta charset="UTF-8"/>
                <title><xsl:value-of select="tit"/></title>
            </head>
            
            <body>
                <h3><xsl:value-of select="tit"/></h3>
                <table>
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
                    <!--
                    <xsl:choose>
                        <xsl:when test="obs">
                            <tr>
                                <th><b>Observações: </b></th>
                                <td><xsl:apply-templates/></td>
                                <xsl:choose>
                                    <xsl:when test="obs/file">
                                        <td>[<xsl:value-of select="obs/file"/>]</td>
                                    </xsl:when>
                                </xsl:choose>
                                <xsl:choose>
                                    <xsl:when test="obs/intxp">
                                        <p><xsl:value-of select="obs/intxp"/></p>
                                    </xsl:when>
                                </xsl:choose>
                           </tr>                            
                        </xsl:when>
                    </xsl:choose>
              -->
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
                                <td>[<xsl:value-of select="file"/>]</td>
                            </tr>
                        </xsl:when>
                    </xsl:choose>
                </table>
            </body>
        </html>
    </xsl:template>
    
</xsl:stylesheet>